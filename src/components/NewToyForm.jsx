import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';


class NewToyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          description: '',
          price: '',
        }

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }

      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
      
      submitForm(e) {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          };
          console.log(config)
        const url = "http://localhost:5000/api/addtoy";
        fetch(url, config)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
            alert(res.error);
            } else {
            alert("Ton article a été ajouté !");
            }
        }).catch(e => {
            console.error(e);
            alert('Erreur lors de l\'ajout de l\'article.');
        });
      }
        
      render() {
    return (
        <div>
            <h2 style={{marginTop:"30px", marginBottom:"30px", textAlign:"center"}}>Vendre un article</h2>
            <form onSubmit={this.submitForm}>
                <div>
                    <label for="name">Titre</label>{'  '}
                    <input type="text" name="name" onChange={this.onChange} value={this.state.name} required />
                </div>
                <div>
                    <label for="description">Description</label>{'  '}
                    <input type="textarea" name="description" onChange={this.onChange} value={this.state.description} required />
                </div>
                <div>
                    <label for="photo">Choisis des photos</label>
                    <input type="file" name="photo" />
                </div>
                <div>
                    <select name="category"></select>
                </div>
                <div>
                    <select name="condition"></select>
                </div>
                <div>
                    <label for="price" required>Prix en euros</label>{'  '}
                    <input type="number" name="price" onChange={this.onChange} value={this.state.price} />
                </div>
                <div>
                    <Button type="submit" color="danger">Ajouter un jouet</Button>
                </div>
            </form>
        </div>
    )
}
}

export default NewToyForm;