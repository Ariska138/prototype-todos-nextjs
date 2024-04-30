import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [dataDetail, setDatail] = useState();
  const [isChecked, setIsChecked] = useState(false);

  const { idEdit } = router.query;

  useEffect(() => {
    if (!idEdit) return;

    fetch(`/api/get-todo-by-id?id=${idEdit}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDatail(data.data);
        setIsChecked(data.data.status === 1);
      });
  }, [idEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = event.target.todo.value;
  
    fetch(`/api/update-todo-by-id`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', //wajib ada
      },
      body: JSON.stringify({
        status: isChecked ? 1 : 0,
        todo: todo,
        id: idEdit,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.message);
      })
      .catch((data) => {
        console.log(data);
        alert('error: ', data.message);
      });
  };

  // ui menggunakan form
  return (
    <div>
      <div>ID for update is {idEdit}</div>
      <div>
        {!dataDetail && <div>Loading...</div>}
        {dataDetail && (
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="todo">Todo: </label>
                <input name="todo" defaultValue={dataDetail.todo}></input>
              </div>
              <div>
                <label htmlFor="todo">Todo: </label>
                <input
                  type="checkbox"
                  name="status"
                  value="1"
                  onChange={(event) => {
                    setIsChecked(event.target.checked);
                  }}
                  checked={isChecked}
                ></input>
              </div>
              <div>
                <button type="submit">Update Data</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
