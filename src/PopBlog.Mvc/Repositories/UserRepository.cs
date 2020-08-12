﻿using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Data.SqlClient;
using PopBlog.Mvc.Models;

namespace PopBlog.Mvc.Repositories
{
	public interface IUserRepository
	{
		Task<bool> IsFirstUserCreated();
		Task Create(User user);
		Task<bool> IsValidUser(string email, string passwordHash);
		Task<User> GetUserByEmail(string email);
		Task<User> GetUserByName(string name);
	}

	public class UserRepository : IUserRepository
	{
		private readonly IConfig _config;

		public UserRepository(IConfig config)
		{
			_config = config;
		}

		public async Task<bool> IsFirstUserCreated()
		{
			await using var connection = new SqlConnection(_config.ConnectionString);
			var hasOneOrMoreUsers = await connection.ExecuteScalarAsync<int>("SELECT COUNT(*) FROM Users");
			return hasOneOrMoreUsers != 0;
		}

		public async Task Create(User user)
		{
			await using var connection = new SqlConnection(_config.ConnectionString);
			await connection.ExecuteAsync("INSERT INTO Users (Name, Email, Password) VALUES (@Name, @Email, @Password)", user);
		}

		public async Task<bool> IsValidUser(string email, string passwordHash)
		{
			await using var connection = new SqlConnection(_config.ConnectionString);
			var userIsValid = await connection.ExecuteScalarAsync<int>("SELECT COUNT(*) FROM Users WHERE Email = @Email AND Password = @Password", new {Email = email, Password = passwordHash}) == 1;
			return userIsValid;
		}

		public async Task<User> GetUserByEmail(string email)
		{
			await using var connection = new SqlConnection(_config.ConnectionString);
			var user = await connection.QuerySingleOrDefaultAsync<User>("SELECT UserID, Name, Email FROM Users WHERE Email = @Email", new {Email = email});
			return user;
		}

		public async Task<User> GetUserByName(string name)
		{
			await using var connection = new SqlConnection(_config.ConnectionString);
			var user = await connection.QuerySingleOrDefaultAsync<User>("SELECT UserID, Name, Email FROM Users WHERE Name = @Name", new { Name = name });
			return user;
		}
	}
}