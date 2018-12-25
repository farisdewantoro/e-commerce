import db from '../../config/conn';
import {validationCreateCategory} from './validation';
export const createCategory = async (req,res)=>{
    const { errors, isValid} = validationCreateCategory(req.body);
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
    if (req.body.description) data.description = req.body.description;
 
    let sql = `INSERT INTO categories SET ?`;
    try{
        let query = await db.query(sql, data);
        return res.status(201).json({error:false,message:"success create category"});
    }catch(e){
        return res.status(400).json({ error: true, message: "error create category" });
    }
}