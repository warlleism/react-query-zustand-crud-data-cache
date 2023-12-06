import React, { useState } from 'react';
import useStore from "../context/useStore";
import Modal from 'react-modal';
import { ICharacters } from "../interfaces/ICharacters";

export const RenderItems = () => {

    const { data, editItems, deleteItems } = useStore();
    const [selectedCharacter, setSelectedCharacter] = useState<null | ICharacters>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleItemClick = (character: any) => {
        setSelectedCharacter(character);
        setIsModalOpen(true);
    };

    const closeModal = () => {

        if (selectedCharacter === null) {
            return ;
          }
      
        editItems(selectedCharacter)
        setSelectedCharacter(null);
        setIsModalOpen(false);
    };

    const deleteItem = (id: number) => {
        deleteItems(id)
        setIsModalOpen(false);

    }

    return (
        <>
            {data?.map((character, index) => (
                <div key={index} onClick={() => handleItemClick(character)}>
                    <div>{character.name}</div>
                </div>
            ))}

            {selectedCharacter && (
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Character Details"
                >
                    <div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label>Nome</label>
                            <input
                                type='text'
                                value={selectedCharacter?.name}
                                onChange={(e) => setSelectedCharacter({ ...selectedCharacter, name: e.target.value })}
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <label>Especie</label>
                            <input
                                type='text'
                                value={selectedCharacter?.species}
                                onChange={(e) => setSelectedCharacter({ ...selectedCharacter, species: e.target.value })}
                            />
                        </div>
                        <button onClick={() => setIsModalOpen(false)}>Fechar</button>
                        <button onClick={closeModal}>Salvar</button>
                        <button onClick={() => deleteItem(selectedCharacter?.id)}>Deletar</button>
                    </div>
                </Modal>
            )}
        </>
    );
};
