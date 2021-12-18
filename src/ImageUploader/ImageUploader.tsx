import React, { useState } from 'react'
import {
  Person as PersonIcon,
  FileUpload as FileUploadIcon,
} from '@mui/icons-material'
import { Box, Grid, styled } from '@mui/material'

interface PropTypes {
  changeAvatar: (file: string) => void
  avatar: string
}

const UploaderBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'hasImageDisplayed',
})<{ hasImageDisplayed: boolean }>(({ hasImageDisplayed }) => ({
  margin: 'auto',
  width: '80px',
  height: '80px',
  borderRadius: '5px',
  ...(!hasImageDisplayed && {
    border: '2px dashed #ccc',
    backgroundColor: '#eee',
  }),

  display: 'flex',
  cursor: 'pointer',
}))

const ImageUploader = ({
  avatar,
  changeAvatar,
}: PropTypes): React.ReactElement => {
  const [isDragOver, setIsDragOver] = useState(false)
  const emptyContent = isDragOver ? (
    <FileUploadIcon
      sx={{ margin: 'auto', fontSize: '80px' }}
      color="action"
      width="80px"
    />
  ) : (
    <PersonIcon
      sx={{ margin: 'auto', fontSize: '80px' }}
      color="action"
      width="80px"
    />
  )

  const loadTemporaryProfilePicture = async (
    event: React.DragEvent<HTMLDivElement>,
  ) => {
    event.preventDefault()
    handleImageUpload(event.dataTransfer.files[0] || undefined)
    // if (event.dataTransfer.files.length === 1) {
    //   const file = event.dataTransfer.files[0]
    //   const reader = new FileReader()
    //   reader.readAsDataURL(file)
    //   reader.onload = () => {
    //     console.log(reader.result)
    //     changeAvatar(reader.result as string)
    //     // setProfilePicture(reader.result as string)
    //   }
    // } else {
    //   changeAvatar('')
    //   // TODO: show error
    //   // setProfilePicture('')
    // }
  }

  const handleImageUpload = (file?: Blob) => {
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        console.log(reader.result)
        changeAvatar(reader.result as string)
        // setProfilePicture(reader.result as string)
      }
    } else {
      changeAvatar('')
      // TODO: show error
      // setProfilePicture('')
    }
  }

  const content =
    avatar !== '' ? (
      <img
        style={{
          // margin: 'auto',
          borderRadius: '4px',
          maxWidth: '100%',
          height: 'auto',
          maxHeight: '100%',
          objectFit: 'contain',
        }}
        src={avatar}
        alt="profile_picture"
      />
    ) : (
      emptyContent
    )

  return (
    <Grid
      container
      onClick={() => {
        const input = document.getElementById('file-upload')
        if (input) {
          input.click()
        }
      }}
      onDrop={loadTemporaryProfilePicture}
      onDragEnter={(e) => {
        e.preventDefault()
        setIsDragOver(true)
      }}
      onDragOver={(e) => {
        e.preventDefault()
        !isDragOver && setIsDragOver(true)
      }}
      onDragLeave={(e) => {
        e.preventDefault()
        setIsDragOver(false)
      }}
    >
      <Grid item xs={12}>
        <UploaderBox
          hasImageDisplayed={
            avatar !== null && avatar !== undefined && avatar !== ''
          }
        >
          {content}
        </UploaderBox>
        <input
          id="file-upload"
          accept="image/*"
          type="file"
          style={{ display: 'none' }}
          onChange={(event) =>
            event.target.files &&
            handleImageUpload(event.target.files[0] || undefined)
          }
        />
      </Grid>
    </Grid>
  )
}

export default ImageUploader
