using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using JavascriptService.Models;
using Dapper;

namespace JavascriptService.wwwroot
{
    public class ApiController : Controller
    {
        string connectionString = "";

        public IActionResult Index()
        {
            using var connection = new SqlConnection(connectionString);

            var students = connection.Query<StudentModel>("SELECT * FROM Students");

            return Json(students);
        }

        [HttpPost]
        public IActionResult Add(StudentModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    msg = "Eksik veya hatalı form girdiniz..."
                });
            }

            using var connection = new SqlConnection(connectionString);

            var newRecordId = connection.ExecuteScalar<int>("INSERT INTO Students (firstName, lastName) VALUES (@firstName, @lastName) SELECT SCOPE_IDENTITY()", model);

            model.Id = newRecordId;

            return Ok(model);
        }
    }
}
