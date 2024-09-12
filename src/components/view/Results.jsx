import React from 'react'
import Select from '../shared/components/select/Select'
import Input from '../shared/components/inputs/text/Text'
import Typography from '../shared/components/typography/Typography'
import Accordion from '../shared/components/accordion/Accordion'
import './Results.scss'

const Results = () => {
  return (
    <div>
          <Typography type={'section-header'}>Results</Typography>
            <br />
          <div className="controls">
              <Input type="text" placeholder="Search" size="large" />
              <div className="filters">
                  <Select
                      options={[
                          { value: 'option1', label: 'Option 1' },
                          { value: 'option2', label: 'Option 2' }
                      ]}
                      disabled={false}
                      defaultValue={{ value: '', label: 'Filter By' }}
                      type='multi'
                  />
                  <Select
                      options={[
                          { value: 'option1', label: 'Option 1' },
                          { value: 'option2', label: 'Option 2' }
                      ]}
                      disabled={false}
                      defaultValue={{ value: '', label: 'Sort By' }}
                  />
              </div>
          </div>

          <br />

          <Accordion />
    </div>
  )
}

export default Results