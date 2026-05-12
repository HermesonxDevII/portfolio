'use client'

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import Image from "next/image";

import Title from "@/components/title";
import Input from "@/components/input";

import { imageIcons } from "@/data/imageIcons";

import { CreateForm } from "@/types/Image";

import { notify } from "@/lib/utils";

import { create } from "@/app/actions/image";
import { FormStatus } from "@/types/FormStatus";

export type Image = File | null
export type ComponentType = 'card' | 'screen'

interface UploadImageProps {
  projectId: string,
  title: string,
  type: ComponentType,
  url?: string,
}

export default function UploadImage({ projectId, title, type, url }: UploadImageProps) {

  const bucket = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET

  if (!bucket) {
    throw new Error("No environment variables for the Supabase were found! - uploadImage.tsx");
  }

  const example = imageIcons[type]

  const [image, setImage] = useState<Image>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')

  const previewUrl = image
    ? URL.createObjectURL(image)
    : url

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      setImage(file);

      await uploadImage(file);
    }
  };

  const uploadImage = async (file: File) => {
    try {
      setFormStatus('sending')

      const fileExt = file.name.split('.').pop();
      const fileName = `${type}-${Math.random()}.${fileExt}`;
      const filePath = `${projectId}/${fileName}`;

      const { error } = await supabase.storage.from(bucket).upload(filePath, file);

      if (error) throw error;

      const { data: publicUrlData } = supabase.storage.from(bucket).getPublicUrl(filePath);

      const formData: CreateForm = {
        projectId: projectId,
        url: publicUrlData.publicUrl,
        index: example.index
      }

      const response = await create(formData)

      if (!response.success) {
        notify({ title: response.message, icon: 'error' })
      } else {
        setFormStatus('idle')
        notify({ title: response.message, icon: 'success'})
      }
    } catch (error) {
      setFormStatus('error')
      console.error("Erro no upload: ", error);
    }
  };

  useEffect(() => {
    if (!image) return;

    const objectUrl = URL.createObjectURL(image);

    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  return (
    <div className="h-30 p-2 flex flex-row gap-3 rounded">
      {previewUrl
        ? <Image
            src={previewUrl}
            width={100}
            height={100}
            alt="teste"
            className="shrink-0 object-cover rounded-lg"
          />

        : <Image
            src={example.icon}
            width={100}
            height={100}
            alt="teste"
            className="shrink-0"
          />
      }

      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        <div className="flex flex-col justify-between items-start gap-2">
          <Title className="text-md">{title}</Title>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            disabled={formStatus === 'sending'}
          />
        </div>

        <p className="text-white/40 text-xs">Selecione uma imagem</p>
      </div>
    </div>
  )
}
