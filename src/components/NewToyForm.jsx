import React from 'react';
import { Button } from 'reactstrap';

const NewToyForm = () => {
    return (
        <div>
            <h2 style={{marginTop:"30px", marginBottom:"30px", textAlign:"center"}}>Vendre un article</h2>
            <button style={{display:"block", margin:"auto", border:"1px solid #ccc", borderRadius:"50px", padding:"5px"}}>+ Ajoutez des photos</button>
            <form style={{marginTop:"15px", marginBottom:"15px"}}>
                    <div style={{textAlign:"left", marginLeft:"35px", fontSize:"1.5rem"}}><label for="titre">Titre</label>{'  '}</div>
                    <div style={{marginBottom:"10px"}}><input type="text" name="titre" required style={{backgroundColor:"#e8e3ce", color:"black", width:"300px", height:"50px"}}/></div>
                    <div style={{textAlign:"left", marginLeft:"35px", fontSize:"1.5rem"}}><label for="description">Description</label>{'  '}</div>
                    <div style={{marginBottom:"10px"}}><input type="textarea" name="description" required style={{backgroundColor:"#e8e3ce", color:"black", width:"300px"}}/></div>
                    <div style={{textAlign:"left", marginLeft:"35px", fontSize:"1.5rem"}}><label for="price" required>Prix en euros</label>{'  '}</div>
                    <div style={{marginBottom:"10px"}}><input type="number" name="price" style={{backgroundColor:"#e8e3ce", color:"black", width:"300px"}}/></div>     
            </form>
            <Button type="submit" style={{backgroundColor:"#70c5f4", color:"black", marginLeft:"180px"}}>Vendre</Button>
        </div>
    )
}

export default NewToyForm;