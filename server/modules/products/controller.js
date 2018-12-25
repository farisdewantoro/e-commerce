import db from '../../config/conn';
import { validationCreateProduct } from './validation';
export const createCategory = async (req, res) => {
    const { errors, isValid } = validationCreateProduct(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    let data = {};
    if (req.body.categoryName) {
        data.categoryName = req.body.categoryName
        data.slug = req.body.categoryName.toLowerCase()
            .replace(/[^\w ]+/g, '')
            .replace(/ +/g, '-');
    };
    if (req.body.description) {
        data.description = req.body.description
    };
    let sql = `INSERT INTO categories SET ?`;
    try {
        let query = await db.query(sql, data);
        return res.status(201).json({ error: false, message: "success create category" });
    } catch (e) {
        return res.status(400).json({ error: true, message: "error create category" });
    }
}

export const createProduct = async (req,res) =>{
    const { errors, isValid } = validationCreateProduct(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    let product ={
        name:req.body.product.name,
        slug:req.body.product.name.toLowerCase().replace(/[^\w]+/g,'').replace(/ +/g,'-'),
        regular_price:req.body.product.regular_price
    };
    if (req.body.product.description) product.description = req.body.product.description;
    
    let productVariant={
        original_color: req.body.product_variant.original_color,
        hex_color: req.body.product_variant.hex_color
    }
    let productAttribute={
        size:req.body.product_attribute.size,
        stock:req.body.product_attribute.stock
    }
 
}