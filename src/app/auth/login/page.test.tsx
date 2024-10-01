import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from "@testing-library/user-event";
import { createSessionToken } from '@/lib/session';

import Login from './page';


describe("Login page tests",() => {    

    test("Render Login", async() => {   
        const spy = vi.spyOn(createSessionToken, 1)    
        const user = userEvent;  
        render(<Login />) 
        
        const inputEmail = screen.getByPlaceholderText("e.g. email@example.com");
        await user.type(inputEmail, "user@email.com");

        const inputPassword = screen.getByPlaceholderText("********");
        await user.type(inputPassword, "userpassword");

        const loginButton = screen.getByRole('button', {name: "Login"});
        await user.click(loginButton);
        
    })
})