import React from 'react'
import logo from '../assets/img/logosergio.png'

const Pedido = () => {
    return (
        <div>
            
            <div className="text-center mt-3">
                <img src={logo} alt="logosergio.png"/>
            </div>
            <h2 className="text-center mt-5">Formulario Pedido</h2>
            <h3>Datos de Catalogo</h3>
            <label><strong>Catalogo Vigente</strong></label>
            <input type="text" className="form-control" />
            <label><strong>Vigencia</strong></label>
            <input type="date" className="form-control" />
            <label><strong>Categoria</strong></label>
            <select className="form-control">
                <option value="Tecnologia">Tecnologia</option>
                <option value="Servicio Hogar">Servicio Hogar</option>
                <option value="Comida">Comida</option>
                <option value="Bebida">Bebida</option>
                <option value="Electrodomestico">Electrodomestico</option>
            </select>
            <label><strong>Codigo Catalogo</strong></label>
            <input type="text" className="form-control" readOnly />
            <button className="btn btn-primary mt-3 mb-5" type="button" data-toggle="modal" data-target="#ventana">
                Agregar Producto(+)
            </button>
            <table className="table table-striped text-center mb-5">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Producto</th>
                        <th>Valor Unitario</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>100</td>
                        <td>Nevera Samsung</td>
                        <td>$1.800.000</td>
                        <td>1</td>
                        <td>$1.800.000</td>
                        <td><button className="btn btn-danger">-</button></td>
                    </tr>
                    <tr>
                        <td>101</td>
                        <td>Tv Lg 58 Pulgadas</td>
                        <td>$2.000.000</td>
                        <td>2</td>
                        <td>$4.0000.000</td>
                        <td><button className="btn btn-danger">-</button></td>
                    </tr>

                </tbody>


            </table>
            <div className="float-sm-right">
                <h2>Total: $5.800.000</h2>
                <h2>Descuento: 0</h2>
                <h2>Pagar:$5.800.000</h2>
            </div>

            <button className="btn btn-primary">Guardar Pedido</button>

            <div className="modal fade" id="ventana">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                               <div className="modal-header text-center">
                                   <h4 className="modal-title ">Lista de Productos</h4>
                                   <button type="button" class="close" data-dismiss="modal">&times;</button>
                               </div>
                               <div className="modal-body">
                                    <table className="table table-striped text-center">
                                        <thead>
                                            <tr>
                                                <th>Codigo</th>
                                                <th>Producto</th>
                                                <th>Valor Unitario</th>
                                                <th>Cantidad</th>
                                                <th>Subtotal</th>
                                                <th>Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>

                                                <td>100</td>
                                                <td>Tv Samsung 58</td> 
                                                <td>$1.800.000</td>
                                                <td><input type="number" /></td>
                                                <td>$0</td>   
                                                <td><button class="btn btn-success">Agregar(+)</button></td>    
                                            </tr>

                                        </tbody>
                                    </table>
                               </div>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default Pedido
