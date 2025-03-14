import React, { useEffect, useState } from 'react'
import { assets} from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';
const Add = ({url}) => {
  const [image, setImage] = useState();
  const [data, setData] = useState({
      name: '',
      description: '',
      price: '',
      category: "Salad"
  });
  
  const onChangeHandler = (event) => {
      const name = event.target.name;  
      const value = event.target.value;
      setData(data => ({ ...data, [name]: value }));
  };
  
  useEffect(() => {
      console.log(data);
  }, [data]);
  
  const onsubmitFormHandler = async (event) => {
      event.preventDefault();
  
     
      const formData = new FormData();  
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", Number(data.price));
      formData.append("category", data.category);
      formData.append("image", image);
      try {
        const response = await axios.post(`${url}/api/food/add`, formData);
    
        if (response.data.success) {
            setData({
                name: '',
                description: '',
                price: '',
                category: "Salad"
            });
             setImage(false);  
              toast.success(response.data.message)     
          } else {
            console.error("faild to add food", response.data.message);
            toast.error(response.data.error)
        }
    } catch (error) {
        console.error("erro sending request", error);
       
    }
  };
  
  return (
      <div class="p-6 border-2 border-gray-300 rounded-lg">
          <form action="" class="space-y-6" onSubmit={onsubmitFormHandler}>
              <div>
                  <p class="font-bold">Upload Image</p>
                  <label for="image">
                      <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" class="cursor-pointer" />
                  </label>
                  <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" class="hidden" required />
              </div>
              <div>
                  <p class="font-bold">Product Name</p>
                  <input onChange={onChangeHandler} value={data.name} type="text" name="name" required placeholder="type here" class="p-3 border-2 border-gray-300 rounded-md w-full" />
              </div>
              <div>
                  <p class="font-bold">Product Description</p>
                  <textarea 
                      onChange={onChangeHandler} 
                      value={data.description || ''} 
                      name="description" 
                      rows="6" 
                      placeholder="write content here" 
                      
                      className="p-3 border-2 border-gray-300 rounded-md w-full" 
                  />
              </div>
              <div class="grid grid-cols-2 gap-6">
                  <div>
                      <p class="font-bold">Product Category</p>
                      <select onChange={onChangeHandler} value={data.category} name="category" class="p-3 border-2 border-gray-300 rounded-md w-full">
                          <option value="Salad">Salad</option>
                          <option value="Rolls">Rolls</option>
                          <option value="Deserts">Deserts</option>
                          <option value="Sandwish">Sandwish</option>
                          <option value="Cake">Cake</option>
                          <option value="Pure Veg">Pure Veg</option>
                          <option value="Pasta">Pasta</option>
                          <option value="Noodles">Noodles</option>
                      </select>
                  </div>
                  <div>
                      <p class="font-bold">Product Price</p>
                      <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder="$20" className="p-3 border-2 border-gray-300 rounded-md w-full" required />
                  </div>
              </div>
              <button type="submit" class="p-3 bg-green-500 text-white rounded-md w-full hover:bg-green-600">
                  Add
              </button>
          </form>
      </div>
  );
     

    
}


export default Add
