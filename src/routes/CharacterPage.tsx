import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SingleCharacter } from "../Interfaces/CharacterInterface"
import Loader from "../Components/Loader";

function replaceNewlinesWithBreaks(text: string) {
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
}

export default function CharacterPage() {
  const { characterId } = useParams()
  const [character, setCharacter] = useState<SingleCharacter>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const url = `https://api.jikan.moe/v4/characters/${characterId}/full`

  useEffect(() => {
    async function fetchCharacter(){
      try{
        const response = await fetch(url)
        if (response.status === 200) {
          const data = await response.json()
          setCharacter(data)
        } else {
          setError('No character found with given Id');
        }
      } catch (error) {
        setError('An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()
  }, [url])

  if (loading) {
    return <Loader/>;
  }

  if(!character) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-10 flex flex-col gap-20">
      <div className="flex bg-white rounded-2xl">
        <img
          src={character.data.images.jpg.image_url}
          alt={character.data.name + ' image'}
          title={character.data.name + ' image'}
          className="w-[24em] object-cover"
        />
        <div className="flex flex-col justify-between p-8">
          <h2 className="text-4xl">
            {character.data.name}
          </h2>
          <p className="mt-4 text-lg">
            {character.data.about ? 
            replaceNewlinesWithBreaks(character.data.about) 
            :
            null
            }
          </p>
        </div>
      </div>
      <div className="rounded-2xl px-10 py-8 bg-white">
        <h2  className="text-4xl mb-10">
          Voice Actors:
        </h2>
        <div className="grid grid-cols-3 gap-y-10 place-items-center">
          {character.data.voices.map((voice) => (
            <div className="flex gap-4 items-center  rounded-2xl border-2 shadow-xl bg-gray-200 h-[100px] w-[400px]">
              <img 
              src={voice.person.images.jpg.image_url} 
              alt={voice.person.name + ' image'}
              title={voice.person.name + ' image'}
              className="rounded-2xl object-contain w-2/12 object-center"
              />
              <div className="text-left">
                <p className="text-2xl">
                  {voice.person.name}
                </p>
                <p className="text-2xl">
                  {voice.language}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
