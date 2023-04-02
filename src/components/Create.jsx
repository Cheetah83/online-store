import { useForm } from '../hooks/useForm'

const Create = ({
    onCreateProduct,
}) => {
    const { values, changeHandler, onSubmit } =useForm({
        title: '',
        price: '',
        img: '',
        desc: '',
    }, onCreateProduct);

  return (
    <>
        <form method="post" onSubmit={onSubmit}>
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                    <h1>Add Your Product</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input value={values.title} onChange={changeHandler} name="title" type="title" className="form-control" id="title" placeholder="Iphone Model" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                        <input value={values.price} onChange={changeHandler} name="price" type="text" className="form-control" id="price" placeholder="750" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Image Url</label>
                        <input value={values.img} onChange={changeHandler} name="img" type="text" className="form-control" id="imageUrl" placeholder="https://" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea value={values.desc} onChange={changeHandler} name="desc" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-primary w-100 mt-3">Login</button>
                </div>
            </div>
        </div>
        </form>
    </>
  )
}

export default Create