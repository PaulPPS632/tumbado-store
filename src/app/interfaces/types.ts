
export interface Producto{
    id: number;
    nombre: string;
    descripcion: string;
    precio_anterior: number;
    precio: number;
    isdescuento: number;
    descuento: number;
    stock: number;
    stock_minimo: number;
    imagen: string;
    categoria_id: number;
    sexo_id: number;
    marca_id: number;
    tipo_id: number;
    activo: number;
    created_at: string;
}

export interface ProductoWithContent {
  id: number;
  nombre: string;
  descripcion: string;
  precio_anterior: number;
  precio: number;
  isdescuento: number;
  descuento: number;
  stock: number;
  stock_minimo: number;
  imagen: string;
  categoria_id: number;
  sexo_id: number;
  marca_id: number;
  tipo_id: number;
  activo: number;
  created_at: string;
  categoria: Categoria;
  sexo: Sexo;
  marca: Marca;
  tipo: Tipo;
  tallas: Talla[];
  imagenes: string[];
}

export interface Talla {
  id: number;
  valor: string;
  tipo: string;
}

export interface Categoria {
  id: number;
  nombre: string;
  activo: number;
  created_at: string;
}

export interface Sexo {
  id: number;
  nombre: string;
  activo: number;
  created_at?: string;
}

export interface Marca {
  id: number;
  nombre: string;
  activo: number;
  created_at: string;
}

export interface Tipo {
  id: number;
  nombre: string;
  activo: number;
  created_at: string;
}

export interface Search {
  search: string;
  categoria_id?: number;
  sexo_id?: number;
  marca_id?: number;
  tipo_id?: number;
}