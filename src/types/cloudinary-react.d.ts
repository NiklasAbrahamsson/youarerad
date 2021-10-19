/**
 * Modified version of https://github.com/cloudinary/cloudinary-react/issues/74#issuecomment-842756982
 */

declare module 'cloudinary-react' {
  import { ReactNode, Ref } from 'react'

  export interface CloudinaryContextProps {
    cloudName: string;
    children?: ReactNode;
  }

  export interface ImageProps extends JSX.IntrinsicElements.img {
    publicId: string;
    crop: string;
    children?: ReactNode;
  }

  export interface VideoProps extends JSX.IntrinsicElements.video {
    publicId: string;
    playsInline?: boolean;
    muted?: boolean;
    loop?: boolean;
    autoPlay?: boolean;
    autoplaymode?: string;
    controls?: boolean;
    innerRef?: Ref<HTMLVideoElement>;
    children?: ReactNode;
  }

  export interface TransformationProps {
    quality: string;
    children?: ReactNode;
  }

  export class CloudinaryComponent {
      constructor(props, context) {}

      getChildContext() {}

      render() {}

      getChildTransformations(children) {}

      getTransformations() {}

      normalizeOptions(...options) {}

      getURL(extendedProps) {}

      typesFrom(configParams) {}
  }

  export function CloudinaryContext(props: CloudinaryContextProps);

  export function Image(props: ImageProps);

  export function Video(props: VideoProps);

  export function Transformation(props: TransformationProps);
}
