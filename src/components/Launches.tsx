import * as React from 'react';
import { useGetSpaceXLaunchesQuery } from "../services/space-x";
import { DataGrid } from '@mui/x-data-grid';

  export default function Launches() {
    const { data, isError, isLoading } = useGetSpaceXLaunchesQuery();

    const columns = [
        { field: 'id', headerName: 'Id' },
        { field: 'flight_number', headerName: 'flight number' },
        { field: 'name', headerName: 'Name'},
        { field: 'date_utc', headerName: 'date', width: 300 },
        { field: 'launch_success', headerName: 'launch success' },
        { field: 'links', headerName: 'links' },
    ]
    return (
        <div style={{ display: 'flex', height: '600px' }}>
        {isError ? (
          <>Oh no, there was an error</>
        ) : data ? (
                <div style={{ flexGrow: 1 }}>
                    <DataGrid
                        columns={columns} 
                        rows={data} 
                        loading={isLoading}
                        pageSize={50}
                    />
                </div>
        ) : null}
      </div>
    )
  }

