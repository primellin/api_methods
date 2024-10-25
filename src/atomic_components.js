export function DefaultInput(props) {
    return (
        <input type="text" className="default-input" id={props.id} placeholder={props.placeholder} />
    );
}

export function FormInput(props) {
    return (
        <input type="text" className="form-input" id={props.id} placeholder={props.placeholder} defaultValue={props.defaultValue} />
    );
}

export function ReadOnlyInput(props) {
    return (
        <textarea className="read-only-input" id={props.id} readOnly></textarea>
    );
}

export function DefaultButton(props) {
    return (
        <button className="default-button" onClick={props.onClickHandler}>{props.text}</button>
    );
}

export function DefaultLabel(props) {
    return (
        <label className="default-label">{props.text}</label>
    );
}

export function PagingButtonLeft(props) {
    return (
        <button className="paging-button-left" onClick={props.onClickHandler}>{props.text}</button>
    );
}

export function PagingButtonRight(props) {
    return (
        <button className="paging-button-right" onClick={props.onClickHandler}>{props.text}</button>
    );
}


