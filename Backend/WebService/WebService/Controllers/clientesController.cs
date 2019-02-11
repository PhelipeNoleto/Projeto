using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;

namespace WebService.Controllers
{

    [RoutePrefix("api/clientes")]
    public class clientesController : ApiController
    {
        private handsonEntities db = new handsonEntities();

        // GET: api/clientes/
        [Route("list")]
        [ResponseType(typeof(clientes))]
        public IHttpActionResult Getclientes()
        {
            IList<clientes> clientes = db.clientes.OrderBy(C => C.nome).ToList();

            if (clientes.Count == 0)
            {
                return NotFound();
            }

            return Ok(clientes);
        }

        // PUT: api/clientes/
        [Route("update")]
        [ResponseType(typeof(void))]
        public IHttpActionResult Putclientes(clientes cliente)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            /*if (id != clientes.id)
            {
                return BadRequest();
            }*/

            db.Entry(cliente).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                /*if (!clientesExists(id))
                {*/
                    return NotFound();
                /*}
                else
                {
                    throw;
                }*/
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/clientes
        [Route("insert")]
        [ResponseType(typeof(clientes))]
        public IHttpActionResult Postclientes(clientes clientes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.clientes.Add(clientes);
            db.SaveChanges();

            return Ok(clientes);
        }

        // DELETE: api/clientes/5
        [Route("delete/{id}")]
        [ResponseType(typeof(clientes))]
        public IHttpActionResult Deleteclientes(int id)
        {
            clientes clientes = db.clientes.Find(id);
            if (clientes == null)
            {
                return NotFound();
            }

            db.clientes.Remove(clientes);
            db.SaveChanges();

            return Ok(clientes);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool clientesExists(int id)
        {
            return db.clientes.Count(e => e.id == id) > 0;
        }
    }
}