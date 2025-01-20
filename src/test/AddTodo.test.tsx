// npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest

import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Todo } from '../components/types';
import AddTodo from "../components/AddTodo";

const mockSetTodos = jest.fn();
const mockTodos: Todo[] = [];

describe('Add Todo Component Test Suite', () => {


        beforeEach(() => {
            mockSetTodos.mockClear();
        })

        it('should renders AddTodo from', () => {
            render(<AddTodo todos={mockTodos} setTodos={mockSetTodos} />);

            // Controll all elements exist on screen
            expect(screen.getByTestId('task-title')).toBeInTheDocument();
            expect(screen.getByTestId('task-description')).toBeInTheDocument();
            expect(screen.getByTestId('task-end-date')).toBeInTheDocument();
            expect(screen.getByTestId('task-submit-btn')).toBeInTheDocument();
        });

        it('should add a new todo when form is filles and submitted', async () => {
            render(<AddTodo todos={mockTodos} setTodos={mockSetTodos} />);

            const titleInput = screen.getByTestId("task-title");
            const descriptionInput = screen.getByTestId("task-description");
            const datePicker = screen.getByTestId("task-end-date");
            const submitButton = screen.getByTestId("task-submit-btn");

            // Simulate user inputs
            fireEvent.change(titleInput, { target: { value: "Test Task" } });
            fireEvent.change(descriptionInput, { target: { value: "Test Description" } });

            // Simulate date changes (mock DatePicker)
            fireEvent.change(datePicker.querySelector("input")!, { target: { value: "2023/01/01" } });

            // Simulate form-submission
            fireEvent.click(submitButton);

            // Verify that setTodos was called with the correct data
            expect(mockSetTodos).toHaveBeenCalledWith(
                expect.arrayContaining([
                    expect.objectContaining({
                        title: "Test Task",
                        description: "Test Description",
                        date: expect.any(Date), // Verify usage of date
                        status: "todo",
                    }),
                ])
            );

        });

        it('should not add new todo if title, description or date is missing', async () => {
            render(<AddTodo todos={mockTodos} setTodos={mockSetTodos} />);

            const titleInput = screen.getByTestId('task-title');
            // const descriptionInput = screen.getByTestId('task-description');
            // const dateInput = screen.getByTestId('task-end-date');
            const submitBtn = screen.getByTestId('task-submit-btn');

            userEvent.type(titleInput, 'Test Task');

            userEvent.click(submitBtn);

            await waitFor(() => {
                expect(mockSetTodos).not.toHaveBeenCalled();
            });
        });


   


});