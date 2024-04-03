import { PhotoIcon } from '@heroicons/react/20/solid'
import { useFormContext } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'
import { useCallback, useEffect } from 'react'
import Image from 'next/image'

export function FileField({ name }: { name: string }) {
  const { register, setValue, unregister, watch } = useFormContext()
  const files = watch(name)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setValue(name, acceptedFiles, { shouldValidate: true })
    },
    [setValue, name],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/gif': ['.gif'],
    },
    maxFiles: 1,
    onDrop,
  })

  useEffect(() => {
    register(name)
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])

  return (
    <div>
      {!!files?.length ? (
        <div className="mt-4">
          <span className="block text-sm font-semibold text-gray-600">
            <div key={files[0].name}>
              <Image src={URL.createObjectURL(files[0])} alt={files[0].name} width={96} height={96} />
            </div>
          </span>
        </div>
      ) : (
        <PhotoIcon
          className="mx-auto h-12 w-12 text-gray-300"
          aria-hidden="true"
        />
      )}
      <label
        htmlFor={name}
        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
      >
        <span>Upload a file</span>
      </label>
      <div
        className="mt-4 flex text-sm leading-6 text-gray-600"
        {...getRootProps()}
      >
        <input
          type="file"
          className="sr-only"
          {...register(name)}
          {...getInputProps()}
        />
        <p className="pl-1">
          {isDragActive ? 'Drop the file here...' : 'Or drag and drop'}
        </p>
      </div>
      <p className="text-xs leading-5 text-gray-600">
        PNG, JPG, GIF up to 10MB
      </p>
    </div>
  )
}
