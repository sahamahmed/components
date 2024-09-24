import React, { useState } from 'react'
import Button from '../shared/components/button/Button'

const EditDataForm = ({onCancel, onSubmit}) => {
    const [isSubmit, setIsSubmit] = useState(false);
  return (
      <div className="run-workflow-form">
          <div className="form-field">
              
          </div>
          <div className="drawer-footer">
              <Button
                  type='secondary'
                  onClick={onCancel}
                  className="footer-button"
                  label="Cancel"
                  disabled={isSubmit}>
              </Button>
              <Button
                  type='primary'
                  onClick={onSubmit}
                  className="footer-button"
                  label={isSubmit ? "Saving Changes..." : "Submit"}
                  disabled={isSubmit}>
              </Button>
          </div>
      </div>
  )
}

export default EditDataForm
