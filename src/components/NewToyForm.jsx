import React from 'react';
import { Button } from 'reactstrap';

const NewToyForm = () => {
    return (
        <div>
            <h2 style={{marginTop:"30px", marginBottom:"30px", textAlign:"center"}}>Vendre un article</h2>
            <button style={{display:"block", margin:"auto", border:"1px solid #ccc", borderRadius:"50px", padding:"5px"}}>+ Ajoutez des photos</button>
            <form style={{marginBottom:"15px"}}>
                    <div><label for="titre">Titre</label>{'  '}</div>
                    <div><input type="text" name="titre" required style={{backgroundColor:"#efeee8", color:"black"}}/></div>
                    <div><label for="description">Description</label>{'  '}</div>
                    <div><input type="textarea" name="description" required style={{backgroundColor:"#efeee8", color:"black"}}/></div>
                    <div><label for="price" required>Prix en euros</label>{'  '}</div>
                    <div><input type="number" name="price" style={{backgroundColor:"#efeee8", color:"black"}}/></div>     
            </form>
            <Button type="submit" style={{backgroundColor:"#70c5f4", color:"black"}}>Vendre</Button>
        </div>
    )
}

export default NewToyForm;