import { useNavigate } from 'react-router-dom';

import Header from '@/components/header';
import { ArrowLeft } from '@/components/icons/arrow-left';
import Space from '@/components/space';
import { Canvas } from '@/feature/canvas-konva/components/canvas';
import { EditButton } from '@/feature/poster-customization/components/edit-button';
import { DownloadButton } from '@/feature/poster-download/components/download-button';
import { PotserProviders } from '@/providers/poster-providers';

/*
 ** - Poster edit page
 */
const PosterPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PotserProviders>
      <section id="poster-page">
        <Header
          title="Poster"
          leftIcon={<ArrowLeft />}
          rightIcon={<EditButton />}
          onLeftIconClick={() => {
            navigate('/');
          }}
        />
        <Space height={50} />
        <Canvas />
        <DownloadButton />
      </section>
    </PotserProviders>
  );
};

export default PosterPage;
