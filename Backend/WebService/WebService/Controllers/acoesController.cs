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
    [RoutePrefix("api/acoes")]
    public class acoesController : ApiController
    {
        private handsonEntities db = new handsonEntities();

        // GET: api/acoes/5
        [Route("list")]
        [ResponseType(typeof(acoes))]
        public IHttpActionResult Getacoes()
        {
            IList<acoes> acoes = db.acoes.Select(C => C).ToList();

            if (acoes.Count == 0)
            {
                return NotFound();
            }

            return Ok(acoes);
        }

        // PUT: api/acoes/5
        [Route("update")]
        [ResponseType(typeof(void))]
        public IHttpActionResult Putacoes(acoes acao)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Entry(acao).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest();
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/acoes
        [Route("insert")]
        [ResponseType(typeof(acoes))]
        public IHttpActionResult Postacoes(acoes acao)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.acoes.Add(acao);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (acoesExists(acao.id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return Ok(acao);
        }

        // DELETE: api/acoes/5
        [Route("delete/{id}")]
        [ResponseType(typeof(acoes))]
        public IHttpActionResult Deleteacoes(string id)
        {
            acoes acoes = db.acoes.Find(id);
            if (acoes == null)
            {
                return NotFound();
            }

            db.acoes.Remove(acoes);
            db.SaveChanges();

            return Ok(acoes);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool acoesExists(string id)
        {
            return db.acoes.Count(e => e.id == id) > 0;
        }
    }
}