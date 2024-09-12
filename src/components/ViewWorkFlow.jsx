import React from 'react'
import Select from './shared/components/select/Select'
import Input from './shared/components/inputs/text/Text'
import Typography from './shared/components/typography/Typography'

const ViewWorkFlow = () => {
  return (
      <div className='workflow-list-container'>
          <div className="workflow-header">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.47477 5.63332L5.19144 4.56665L0.683105 9.99998L5.19144 15.4333L6.47477 14.3667L2.84977 9.99998L6.47477 5.63332ZM5.83311 10.8333H7.49977V9.16665H5.83311V10.8333ZM14.1664 9.16665H12.4998V10.8333H14.1664V9.16665ZM9.16644 10.8333H10.8331V9.16665H9.16644V10.8333ZM14.8081 4.56665L13.5248 5.63332L17.1498 9.99998L13.5248 14.3667L14.8081 15.4333L19.3164 9.99998L14.8081 4.56665Z" fill="#0E263F" />
              </svg>
              <Typography type={'page-header'}>Workflow - Testing Sequence</Typography>
          </div>

          <br />

          <div className="workflow-controls">
              <Input type="text" placeholder="Search" size="large" />
              <div className="workflow-filters">
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
    </div>
  )
}

export default ViewWorkFlow