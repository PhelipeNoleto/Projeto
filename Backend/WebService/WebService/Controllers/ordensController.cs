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
    [RoutePrefix("api/ordens")]
    public class ordensController : ApiController
    {
        private handsonEntities db = new handsonEntities();

        // GET: api/ordens/5
        [Route("list")]
        [ResponseType(typeof(ordens))]
        public IHttpActionResult Getordens()
        {
            IList<ordens> ordens = db.ordens.Select(O => O).ToList();

            if (ordens.Count== 0)
            {
                return NotFound();
            }

            return Ok(ordens);
        }

        // POST: api/ordens
        [Route("insert")]
        [ResponseType(typeof(ordens))]
        public IHttpActionResult Postordens(ordens ordem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ordens.Add(ordem);
            db.SaveChanges();

            return Ok(ordem);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ordensExists(int id)
        {
            return db.ordens.Count(e => e.id == id) > 0;
        }
    }
}