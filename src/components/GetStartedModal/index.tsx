import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Stack, TextField } from '@mui/material'
import { TemperatureContext } from 'components/TemperatureContext'
import { useContext } from 'react'

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
  const { setPreferredTemperature } = useContext(TemperatureContext)

  const handleTemperatureSubmit = () => {
    const textInput = document.getElementById(
      'temperature-input'
    ) as HTMLInputElement
    const enteredTemperature = parseFloat(textInput.value)
    setPreferredTemperature(enteredTemperature)

    setTimeout(() => {
      handleClose()
    }, 50)
  }
  return (
    <div>
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
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                At what air temperature (Fahrenheit) do you like to wear shorts?
              </Typography>
              <TextField
                id="temperature-input"
                label="Temperature"
                type="number"
              />
            </Stack>
            <Button onClick={handleTemperatureSubmit}>
              Tell me what to wear!
            </Button>
          </Stack>
        </Fade>
      </Modal>
    </div>
  )
}

export default GetStartedModal
