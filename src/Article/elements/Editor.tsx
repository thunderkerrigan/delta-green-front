import React, { useCallback, useEffect, useState } from 'react'

import Quill, { DeltaStatic, TextChangeHandler } from 'quill' // ES6
import 'react-quill/dist/quill.snow.css'
import './Editor.css'
import { io, Socket } from 'socket.io-client'
import { useParams } from 'react-router'

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['bold', 'italic', 'underline'],
  [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ align: [] }],
  ['image', 'blockquote', 'code-block'],
  ['clean'],
]
const SAVE_INTERVAL_MS = 2000

export const Editor = (): JSX.Element => {
  const [socket, setSocket] = useState<Socket>()
  const [quill, setQuill] = useState<Quill>()
  const { id: documentID } = useParams()
  useEffect(() => {
    const s = io('http://localhost:3001')
    setSocket(s)
    return () => {
      s.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!quill || !socket) return
    socket.once('load-document', (document) => {
      quill.setContents(document)
      quill.enable()
    })
    socket.emit('get-document', documentID)
  }, [socket, quill, documentID])

  //   SEND
  useEffect(() => {
    if (!quill || !socket) return
    const handler: TextChangeHandler = (delta, onDelta, source) => {
      if (source !== 'user') return
      socket.emit('send-changes', delta)
    }
    quill.on('text-change', handler)
    return () => {
      quill.off('text-change', handler)
    }
  }, [socket, quill])

  //   RECEIVE
  useEffect(() => {
    if (!quill || !socket) return
    const handler = (delta: DeltaStatic) => {
      quill.updateContents(delta)
    }
    socket.on('receive-changes', handler)
    return () => {
      socket.off('receive-changes', handler)
    }
  }, [socket, quill])

  //   SAVE
  useEffect(() => {
    if (!quill || !socket) return
    const interval = setInterval(() => {
      socket.emit('save-document', quill.getContents())
    }, SAVE_INTERVAL_MS)
    return () => {
      clearInterval(interval)
    }
  }, [socket, quill])

  const wrapperRef = useCallback(
    (
      wrapper: {
        innerHTML: string
        append: (arg0: HTMLDivElement) => void
      } | null,
    ) => {
      if (wrapper == null) return
      wrapper.innerHTML = ''
      const editor = document.createElement('div')
      wrapper.append(editor)
      const q = new Quill(editor, {
        theme: 'snow',
        modules: { toolbar: TOOLBAR_OPTIONS },
      })
      q.disable()
      q.setText('Loading ...')
      setQuill(q)
    },
    [],
  )

  return <div className="container" ref={wrapperRef}></div>
}
