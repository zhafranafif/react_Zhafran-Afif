import React from "react";
import {render, screen, fireEvent} from "@testing-library/react"
import NameForm from "./FormCoding";
import userEvent from "@testing-library/user-event"

describe('NameForm', () => {
    test('render NameForm component', () => {
        render(<NameForm />)

        expect(screen.getByText("Pendaftaran Peserta Coding Bootcamp")).toBeInTheDocument()
        expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Email:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toBeInTheDocument()

    })

    test('input the data with value', () => {
        render(<NameForm />)
        
        fireEvent.input(screen.getByRole("textbox",
            { name: /nama/i }),
            { target: { value: "halo" } }
        )
        fireEvent.input(screen.getByRole("textbox",
            { name: /email/i }),
            { target: { value: "halo@gmail.com" } }
        )
        fireEvent.input(screen.getByRole("spinbutton",
            { name: /no handphone/i }),
            { target: { value: "087896753458" } }
        )

        fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }))
        fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } })
        
        const selectedProgram = screen.getByRole("combobox", { name: /kelas/i })
        userEvent.selectOptions(selectedProgram, "reactjs")

        const imageFile = new File(
            ["test"],
            "test.pdf",
            { name: /surat kesungguhan/i },
            {type: "image/*,.pdf"}
        )
        const imageInput = screen.getByLabelText(/Foto Surat Kesungguhan/)
        
        fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), { target: { value: "Menjadi lebih baik dalam coding" } })
        
        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("halo")
        expect(screen.getByLabelText(/Email:/)).toHaveValue("halo@gmail.com")
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("087896753458")
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked(true)
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("reactjs")

        expect(imageInput.files.length).toBe(0)
        userEvent.upload(imageInput, imageFile)
        expect(imageInput.files.length).toBe(1)

        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("Menjadi lebih baik dalam coding")

    })

    test('input name with invalid specification', () => {
        render(<NameForm />)
        
        fireEvent.input(screen.getByRole("textbox",
            { name: /nama/i }),
            { target: { value: "halo123" } }
        )
        expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument()
    })

    test('input email with invalid format', () => {
        render(<NameForm />)
        
        fireEvent.input(screen.getByRole("textbox",
            { name: /email/i }),
            { target: { value: "halogmail.com" } }
        )
        expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument()
    })

    test('input number with invalid specification', () => {
        render(<NameForm />)
        
        fireEvent.input(screen.getByRole("spinbutton",
            { name: /no handphone/i }),
            { target: { value: "0878967534583786" } }
        )
        expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument()
    })

    test('when inputted data is empty', () => {
        render(<NameForm />)
        
        const alert = jest.spyOn(window, "alert").mockImplementation()
        
        expect(screen.getByText("Pendaftaran Peserta Coding Bootcamp")).toBeInTheDocument()
        expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Email:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toBeInTheDocument()
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toBeInTheDocument()

        fireEvent.input(screen.getByRole("textbox",
            { name: /nama/i }),
            { target: { value: "" } }
        )
        fireEvent.input(screen.getByRole("textbox",
            { name: /email/i }),
            { target: { value: "" } }
        )
        fireEvent.input(screen.getByRole("spinbutton",
            { name: /no handphone/i }),
            { target: { value: "" } }
        )

        fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }))
        fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "" } })
        
        const selectedProgram = screen.getByRole("combobox", { name: /kelas/i })
        userEvent.selectOptions(selectedProgram, "")

        const imageFile = new File(
            [""],
            "",
            { name: /surat kesungguhan/i },
            {type: "image/*,.pdf"}
        )
        const imageInput = screen.getByLabelText(/Foto Surat Kesungguhan/)
        
        fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), { target: { value: "" } })
        
        expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("")
        expect(screen.getByLabelText(/Email:/)).toHaveValue("")
        expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("")
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).not.toBeChecked()
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("")

        expect(imageInput.files.length).toBe(0)
        

        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("")

        fireEvent.click(screen.getByRole("button", {name: /submit/i}))
        
        expect(screen.getByLabelText(/Nama Lengkap:/)).toBeRequired()
        expect(screen.getByLabelText(/Email:/)).toBeRequired()
        // expect(screen.getByLabelText(/No Handphone:/)).toBeRequired()
        expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeRequired()
        expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toBeRequired()
        expect(imageInput).toBeRequired(imageFile)
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).not.toBeRequired()

        expect(alert).not.toBe()

    })
})