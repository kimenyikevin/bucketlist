import React, { useState, } from 'react';
import UploadImage from '../Upload/Upload';

export default function HomeInput() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [priority, setPriority] = useState("")
    const [error, setError] = useState([]);

    const handeChange = (e) => {
        setName(e.target.value);
    }
    const handePrice = (e) => {
        setPrice(e.target.value);
    }

    const changePriority = (e) => {
        setPriority(e.target.value)
    }

    const saveData = () => {
        let error = [];
        const storage = JSON.parse(localStorage.getItem("bucketData")) || [];
        if (!name) {
            error.push("Please enter bucket name!")
        }
        if (!price) {
            error.push("Please enter price!")
        }
         setError(error)

        const data = {
            id: storage.length + 1,
            name: name,
            price: price,
            priority: priority,
            url: "vhdsvndskjfs",
        }
        storage.push(data);
        localStorage.setItem("bucketData", JSON.stringify(storage));
    }

    
    return (
        <div>
        {
            error.length > 0 && error.map(el => <div class="alert alert-danger " role="alert"> {el}</div>)
        }
            <div className="row">
                <div className="col-lg-4">
                    <input
                        type="text"
                        name="name"
                        onChange={handeChange}
                        class="form-control"
                        placeholder="Bucket name"
                        aria-label="Recipient's username"
                        value={name}
                        aria-describedby="basic-addon2" />
                </div>
                <div className="col-lg-4">
                    <input
                        type="text"
                        name="price"
                        onChange={handePrice}
                        value={price}
                        class="form-control"
                        placeholder="Type price..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2" />
                </div>
                <div className="col-lg-4">
                    <div class="input-group mb-3">
                        <select class="custom-select" id="inputGroupSelect02" onChange={changePriority} value={priority}>
                            <option selected>Choose priority</option>
                            <option value="high">high</option>
                            <option value="medium">medium</option>
                            <option value="low">low</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <UploadImage />
            </div>
            <div>
                <button type="button" class="btn btn-primary btn-lg btn-block" onClick={saveData}>SAVE CHANGES</button>
            </div>

        </div>
    )
}
