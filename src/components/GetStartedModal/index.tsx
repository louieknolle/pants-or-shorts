import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Stack, TextField } from '@mui/material'
import { TemperatureContext } from 'components/TemperatureContext'
import { useContext, useState } from 'react'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

interface GetStartedModalProps {
  handleClose: () => void
  open: boolean
}

const GetStartedModal = ({ handleClose, open }: GetStartedModalProps) => {
  const { setPreferredTemperature, setCity, setState } =
    useContext(TemperatureContext)
  const [isValidNumber, setIsValidNumber] = useState(false) // State to track input validity

  const handleInputChange = (e) => {
    const isValidNumber = !isNaN(parseFloat(e.target.value))
    setIsValidNumber(isValidNumber)

    // Visual feedback for invalid input (optional)
    if (isValidNumber) {
      e.target.style.backgroundColor = 'white'
    } else {
      e.target.style.backgroundColor = '#ffcccc'
    }
  }

  const handleTemperatureSubmit = () => {
    const textInput = document.getElementById(
      'temperature-input'
    ) as HTMLInputElement
    const enteredTemperature = parseFloat(textInput?.value)
    setPreferredTemperature(enteredTemperature)
    setIsValidNumber(false)

    setTimeout(() => {
      handleClose()
    }, 50)
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={open}>
        <Stack sx={style} spacing={4}>
          <Stack spacing={2}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Temperature Preferences
            </Typography>
            <Typography id="transition-modal-description" sx={{ mb: 2 }}>
              At what minimum temperature do you prefer to wear shorts?
            </Typography>
            <TextField
              id="temperature-input"
              label="Temperature"
              type="number"
              onChange={handleInputChange}
            />
            <Typography id="transition-modal-description" sx={{ mb: 2 }}>
              Where are you located? (Sorry, we only support US cities at the
              moment.)
            </Typography>
            <TextField
              id="city-input"
              label="City"
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              id="state-input"
              label="State"
              onChange={(e) => setState(e.target.value)}
            />
          </Stack>
          <Button onClick={handleTemperatureSubmit} disabled={!isValidNumber}>
            Save Preference
          </Button>
        </Stack>
      </Fade>
    </Modal>
  )
}

export default GetStartedModal
