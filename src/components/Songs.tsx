import React, {  } from 'react';
import { MUIDataTableColumn, MUIDataTableMeta } from 'mui-datatables';
import { Button } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import YouTubeIcon from '@material-ui/icons/YouTube';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import spotify from '../spotify.svg';
import { ListCell } from './ListCell';
import { DataTableWithLoading } from './DataTableWithLoading';
export const songColumns: MUIDataTableColumn[] = [
  {
    name: 'title',
    label: 'Title',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'artists',
    label: 'Artists',
    options: {
      sort: false,
      customBodyRender: (value: any) => {
        if (value != '') {
          return <ListCell data={value} />;
        }
        return <NotInterestedIcon color='secondary' />;
      },
    },
  },
  {
    name: 'composers',
    label: 'Composers',
    options: {
      sort: false,
      customBodyRender: (value: any) => {
        if (value != '') {
          return <ListCell data={value} />;
        }
        return <NotInterestedIcon color='secondary' />;
      },
    },
  },
  {
    name: 'writers',
    label: 'Writers',
    options: {
      sort: false,
      customBodyRender: (value: any) => {
        if (value != '') {
          return <ListCell data={value} />;
        }
        return <NotInterestedIcon color='secondary' />;
      },
    },
  },
  {
    name: 'lyricists',
    label: 'Lyricists',
    options: {
      sort: false,
      customBodyRender: (value: any) => {
        if (value != '') {
          return <ListCell data={value} />;
        }
        return <NotInterestedIcon color='secondary' />;
      },
    },
  },
  {
    name: 'copyrights',
    label: 'Copyrights',
    options: {
      sort: false,
      customBodyRender: (value: any) => {
        if (value != '') {
          return <ListCell data={value} />;
        }
        return <NotInterestedIcon color='secondary' />;
      },
    },
  },
  {
    name: 'genres',
    label: 'Genres',
    options: {
      sort: false,
      customBodyRender: (value: any) => {
        if (value != '') {
          return <ListCell data={value} />;
        }
        return <NotInterestedIcon color='secondary' />;
      },
    },
  },
  {
    name: 'album',
    label: 'Album',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'releaseDate',
    label: 'Release Date',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'duration',
    label: 'Duration (secs)',
    options: {
      customBodyRender: (value) => {
        return value / 1000;
      },
    },
  },
  {
    name: 'nrecognitions',
    label: 'amount of recognitions',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'youtubeId',
    label: 'Youtube Link',
    options: {
      sort: true,
      customBodyRender: (value: any) => {
        if (value != '') {
          const url = `https://www.youtube.com/watch?v=${value}`;
          return (
            <Button target='_blank' href={url}>
              <YouTubeIcon htmlColor={red[600]} />
            </Button>
          );
        }
        return <NotInterestedIcon color='secondary' />;
      },
    },
  },
  {
    name: 'spotifyId',
    label: 'Spotify Link',
    options: {
      sort: true,
      customBodyRender: (value: any) => {
        if (value != '') {
          const url = `https://open.spotify.com/track/${value}`;
          return (
            <Button target='_blank' href={url}>
              <div>
                <img src={spotify} width='80%' height='80%' />
              </div>
            </Button>
          );
        }
        return <NotInterestedIcon color='secondary' />;
      },
    },
  },
];

export const Songs: React.FC = () => {
  return (
    <div>
      <DataTableWithLoading endpoint='songs' title={'Songs'} columns={songColumns} />
    </div>
  );
};
