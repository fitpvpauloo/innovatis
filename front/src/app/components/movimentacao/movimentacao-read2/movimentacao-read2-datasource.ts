import { movimentacao } from './../movimentacao.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

const EXAMPLE_DATA: movimentacao[] = [
  {
    id_produto: 1,
    id_usuario: 1,
    idmovimentacao: 1, 
    data_hora: 110521,
    login_usuario: 'iglesias21',
    nome_produto: 'Primeiro produto',
    quantidade: 1,
    tipo_movimentacao: 'SAIDA' 
  },
];

/**
 * Data source for the movimentacaoRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class movimentacaoRead2DataSource extends DataSource<movimentacao> {
  data: movimentacao[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  row:"";

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<movimentacao[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: movimentacao[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: movimentacao[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'quantidade': return compare(+a.quantidade, +b.quantidade, isAsc);
        case 'tipo_movimentacao': return compare(+a.tipo_movimentacao, +b.tipo_movimentacao, isAsc);
        case 'id_usuario': return compare(+a.id_usuario, +b.id_usuario, isAsc);
        case 'id_produto': return compare(a.id_produto, b.id_produto, isAsc);
        // case 'idmovimentacao': return compare(+a.idmovimentacao, +b.idmovimentacao, isAsc);
        // case 'data_hora': return compare(+a.data_hora, +b.data_hora, isAsc);
        // case 'login_usuario': return compare(+a.login_usuario, +b.login_usuario, isAsc);
        // case 'nome_produto': return compare(+a.nome_produto, +b.nome_produto, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
