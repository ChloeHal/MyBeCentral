import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Button from './component/Button/Button'

function Popup() {

  let [isOpen, setIsOpen] = useState(true)

  function handleDeactivate() {
    setIsOpen(false)
}

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-50 z-50"></Dialog.Overlay>
      <Dialog.Panel className="fixed z-50 bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md p-4 shadow-lg">
        <Dialog.Title className="font-bold text-lg mb-2">Account incomplete</Dialog.Title>

        <p className="text-gray-600 mb-4">Seems like your account is incomplete. Want to finish it now?</p>

        <div className="flex justify-end">
        <Button
            color="teal"
            name="No, thank you"
            type="submit"
            clickHandler={()=>console.log(click)}
          />
          <Button
            color="teal"
            name="Yes, please take me to my account"
            type="submit"
            clickHandler={()=>console.log(click)}
          />
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default Popup