import React from 'react';
import { Button } from 'reactstrap';
import './newtoyform.css'

const NewToyForm = () => {
    return (
        <div className="ContainerFlex">
            <h2>Vendre un article</h2>
            <form className="ContainerFlex">
                <div className="ContainerFlex">
                    <label for="titre">Titre</label>{'  '}
                    <input type="text" name="titre" required />
                </div>
                <div className="ContainerFlex">
                    <label for="description">Description</label>{'  '}
                    <input type="textarea" name="description" required />
                </div>
                <div className="ContainerFlex">
                    <label for="photo">Choisis des photos</label>
                    <input type="file" name="photo" required />
                </div>
                <div className="ContainerFlex">
                    <label for="price" required>Prix en euros</label>{'  '}
                    <input type="number" name="price" />
                </div>
                <div >
                    <Button type="submit" color="danger" className="toy">Ajouter un jouet</Button>
                </div>
            </form>
        </div>
    )
}

export default NewToyForm;