using ProgWeb.Dao.Contexts.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ProgWeb.Dao.Common
{
    public class RepositorioBase<TEntity> : IRepository<TEntity> where TEntity : class
    {
        private readonly ApplicationContext _context;

        public RepositorioBase(ApplicationContext context)
        {
            _context = context;
        }

        public IQueryable<TEntity> All => _context.Set<TEntity>().AsQueryable();

        public void Update(params TEntity[] obj)
        {
            _context.Set<TEntity>().UpdateRange(obj);
            _context.SaveChanges();
        }

        public void Delete(params TEntity[] obj)
        {
            _context.Set<TEntity>().RemoveRange(obj);
            _context.SaveChanges();
        }

        public TEntity Find(long key)
        {
            return _context.Find<TEntity>(key);
        }

        public void Add(params TEntity[] obj)
        {
            _context.Set<TEntity>().AddRange(obj);
            _context.SaveChanges();
        }

        public void Add(IList<TEntity> obj)
        {
            _context.Set<TEntity>().AddRange(obj);
            _context.SaveChanges();
        }
    }
}
