import React from 'react'


interface movieProp {
  movieId:number
  handleDelete: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, movieId: number) => void
}

export default function DeleteButton({movieId,handleDelete}:movieProp,) {
  return (
    <div>
        <button onClick={(e) =>handleDelete(e, movieId)} className='btn btn-error btn-sm'>Delete</button>
    </div>
  )
}
