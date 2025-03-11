import { useEffect, useState } from "react";
import { getUsuarios } from "../../api";

function Users() {
  const [usuarios, setUsuarios] = useState<any[]>([]); 

  const fetchUsuarios = async () => {
    const data = await getUsuarios();
    setUsuarios(data);
  };

  useEffect(() => {
    fetchUsuarios(); 
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-900">
      <h1 className="text-2xl font-bold text-center text-gray-400">
        LISTA DE USUÁRIOS CADASTRADOS
      </h1>
      <hr className="w-screen" />
      <ul className="text-white mt-4">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="py-2">
            {usuario.nome} {usuario.sobrenome} - {usuario.email} - {usuario.cpf}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
