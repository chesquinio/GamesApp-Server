import { Request, Response } from 'express';
import { createPoolCluster } from 'mysql';

import {Mysql} from '../database';

class GamesController {
    public async list (req: Request, res: Response): Promise<void> {
        const games = await Mysql.query('SELECT * FROM games');
        console.log(games)
        res.json(games[0])
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const {id}= req.params;
        const games = await Mysql.query('SELECT * FROM games WHERE id = ?', [id])
        if (games.length > 0) {
            return res.json(games[0])	
        }
        res.status(404).json({text: "The game doesnt exist"})
    }

    public async create(req: Request, res: Response) {
        try {
          await Mysql.query("INSERT INTO games set ?", [req.body]);
          res.json({
            message: "Game Saved",
          });
        } catch (error) {
          console.log("Error: " + error);
        }
    }

    public async delete (req: Request, res: Response) {
        const {id} = req.params;
        await Mysql.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({message: "Game Deleted"});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await Mysql.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
        res.json({message: "Game Updated"});
    }
}

export const gamesControllers = new GamesController();