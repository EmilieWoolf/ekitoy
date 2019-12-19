import React from 'react';
import { Button } from 'reactstrap';

const NewToyForm = () => {
    return (
        <div>
            <h2 style={{marginTop:"30px", marginBottom:"30px", textAlign:"center"}}>Vendre un article</h2>
            <form>
                <div>
                    <label for="titre">Titre</label>{'  '}
                    <input type="text" name="titre" required />
                </div>
                <div>
                    <label for="description">Description</label>{'  '}
                    <input type="textarea" name="description" required />
                </div>
                <div>
                    <label for="photo">Choisis des photos</label>
                    <input type="file" name="photo" required />
                </div>
                <div>
                    <select name="category"></select>
                </div>
                <div>
                    <select name="condition" required></select>
                </div>
                <div>
                    <label for="price" required>Prix en euros</label>{'  '}
                    <input type="number" name="price" />
                </div>
                <div>
                    <Button type="submit" color="danger">Ajouter un jouet</Button>
                </div>
            </form>
        </div>
    )
}

export default NewToyForm;