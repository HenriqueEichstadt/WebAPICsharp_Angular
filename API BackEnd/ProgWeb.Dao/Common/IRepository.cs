using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ProgWeb.Dao.Common
{
    public interface IRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> All { get; }
        TEntity Find(long key);
        void Add(params TEntity[] obj);
        void Add(IList<TEntity> obj);
        void Update(params TEntity[] obj);
        void Delete(params TEntity[] obj);
    }
}
