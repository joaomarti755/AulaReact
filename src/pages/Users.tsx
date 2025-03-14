import { useEffect, useState } from "react";

import { getUsuarios, deleteUsuario, updateUsuario, type Usuario } from "../../api";

import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2'

function Users() {
  const [usuarios, setUsuarios] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | number | null>(null)
  const [editedUser, setEditedUser] = useState<Usuario | null>(null)

  const fetchUsuarios = async () => { 
    try{
      setLoading(true)
      const data = await getUsuarios()
      setUsuarios(data)
    }catch(error){
      console.log("Erro ao buscar os usuários", error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleDelete = async (id: string | number | undefined) => {
    if (!id) return;
    const result = await Swal.fire({
      title: "Tem certeza que deseja excluir? ",
      text: "Essa ação não poderá ser desfeita",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, excluir",
      cancelButtonText: "Não, cancelar"
    })
    if (result.isConfirmed) {
      try {
        await deleteUsuario(id)
        setUsuarios(prev => prev.filter(user => user.id !== id))
        Swal.fire("Excluído", "O usuário foi removido com sucesso", "success")
      } catch (error) {
        console.log("Erro ao excluir o usuário", error)
        Swal.fire("Erro!", "Não foi possível remover o usuário", "error")
      }
    }
  }

  const handleEdit = (usuario: Usuario) => {
    setEditingId(usuario.id || null)
    setEditedUser({ ...usuario })
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-900">
      <h1 className="text-2xl font-bold text-center text-gray-400">
        LISTA DE USUÁRIOS CADASTRADOS
      </h1>
      <hr className="w-full" />
      {loading ?  (
        <p className="text-white"> Carregando usuários ... </p>
      ) : usuarios.length === 0 ? (
       <p className="text-white"> Nenhum usuário cadastratado </p>
      ) : (
      <table className="w-full">
        <thead className="bg-gray-400">
          <tr>
            <th className="border px-2 py-2 text-left"> Nome </th>
            <th className="px-2 py-2 text-left"> Sobrenome </th>
            <th className="px-2 py-2 text-left"> Email </th>
            <th className="px-2 py-2 text-left"> CPF </th>
            <th className="px-2 py-2 text-center"> Ação </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {usuarios.map((usuario) => (
            <tr>
              <td className="px-2"> {usuario.nome} </td>
              <td className="px-2"> {usuario.sobrenome} </td>
              <td className="px-2"> {usuario.email}  </td>
              <td className="px-2"> {usuario.sobrenome} </td>
              <td className="px-2 text-center flex justify-center gap-3">
                <FaEdit />
                <button onClick={() => handleDelete(usuario.id)}>
                  <FaTrash className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
}

export default Users;
