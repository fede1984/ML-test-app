import React from 'react'

export const SearchMap = ({query,id}) => {
    return (
        <div className="searchMapContainer col-10">
            {`Lorem ipsum > Lorem > Ipsum > Lorem > `}<strong>{query || id}</strong>
        </div>
    )
}
