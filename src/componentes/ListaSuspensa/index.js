import './ListaSuspensa.css';

const ListaSuspensa =(props) => {

    return(
        <div className='lista_suspensa'>
            <label>{props.label}</label>
            <select onChange={event => props.aoAlterado(event.target.value)} required={props.required} value={props.valor}>
                <option value=''></option>
                {props.itens.map(item => {
                   return <option key={item}>{item}</option>
                   })} 
            </select>
        </div>
    )
}

export default ListaSuspensa
