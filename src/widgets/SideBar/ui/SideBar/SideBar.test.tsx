import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from '@shared/lib/tests/renderWithTranslation/renderWithTranslation';
import SideBar from './SideBar';

describe('SideBar', () => {
  test('test default SideBar', () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId('sidebar-testid')).toBeInTheDocument();
  });

  test('test toggle colapse', () => {
    renderWithTranslation(<SideBar />);
    const btnToggle = screen.getByTestId('sidebar-toggle-testid');
    expect(screen.getByTestId('sidebar-testid')).toBeInTheDocument();
    fireEvent.click(btnToggle);
    expect(screen.getByTestId('sidebar-testid')).toHaveClass('collapsed');
  });
});
