import React, { useState } from "react";

function RowComponents(props){
    const [name, setName] = useState(props.name);
    const [showInput, setShowInput] = useState(false);
    const [inputText, setInputText] = useState('');
    const [editShowInput, setEditShowInput] = useState(false);

    return (
        <>
            <div className="d-flex mt-10">
                <span class='mr-10'>{(!editShowInput) && name}</span>
                {   editShowInput &&  
                    <>
                        <input value={name} onChange={(e) => { setName(e.target.value) }} className='mr-10'/>
                        <button onClick={() => { props.edit(name, props.item.id);setEditShowInput(false); setInputText('')}}>Edit</button>
                    </>
                }
                { !editShowInput &&  <button onClick={() => { setShowInput(true); }}>Add</button> }
                {
                    name && name == '' && <button onClick={() => { props.save(name, props.item?.parent_id) }}>save</button>  
                }
                {
                    props.item.parent_id !== 0 && !editShowInput &&
                    <>
                        <button onClick={() => { setEditShowInput(true); }}>Edit</button>
                        <button onClick={() => { props.deleteCategory(props.item.id); }}>Remove</button>
                    </>
                }
            </div>
            {
                showInput && <div class='p-5 mt-10'>
                    <input value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
                    <button onClick={() => { props.addRow(inputText ,props.id); setShowInput(false); setInputText(''); }}>Save</button>
                    </div>
            }
            { (props.item.sub) ? props.item.sub.map((sub) => (
                <div className="p-5">
                    <RowComponents name={sub.name} addRow={props.addRow} id={sub.id} parent_id={sub.parent_id} save={props.createNew} item={sub} edit={props.edit} deleteCategory={props.deleteCategory}/> 
                </div>
                )): '' 
            }
        </>
    )
} 

export default RowComponents;

