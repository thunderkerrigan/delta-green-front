import React, { useEffect, useState } from 'react'
import {
  CharacterModel,
  skills,
  knowledgeSkills,
} from 'delta-green-core/src/models/CharacterModel'
import axios from 'axios'

const Character = (): JSX.Element => {
  const [character, setCharacter] = useState<CharacterModel>()
  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await axios.get<CharacterModel>(
        'http://localhost:33582/api/maleCharacter',
      )
      setCharacter(response.data)
    }
    fetchCharacter()
    return () => {
      // TODO
    }
  }, [])
  return <div>{JSON.stringify(character)}</div>
}

export default Character
