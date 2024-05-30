import { useState } from "react"
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //categories.push('Valorant');
        setCategories([...categories, newCategory])
        //setCategories(cat => [...cat,'VAlorant'])
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />

            {/* Listado de Gif */}
            {
                categories.map(category =>
                    <GifGrid
                        key={category}
                        category={category} />
                )
            }
        </>
    )
}
