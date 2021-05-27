import React, { useState, useEffect } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const Dropdowns = ({ data, setFilter, filter, title, type }) => {
    const [originalData, setOriginalData] = useState([])

    useEffect(() => {
        if (originalData.length === 0 && data) {
            const newArray = data.locations.results.slice()
            setOriginalData(newArray)
        }
    }, [data, originalData])

    return (
        <DropdownButton id="dropdown-basic-button" title={title}>
            {
                originalData.map(result => (
                    <Dropdown.Item
                        eventKey={result[type]}
                        onSelect={e => setFilter({ ...filter, name: e })}
                        >
                        {result[type]}
                    </Dropdown.Item>
                ))
            }
        </DropdownButton>
    )
}

export default Dropdowns